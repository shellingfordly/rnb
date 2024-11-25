import { PermissionsAndroid, Platform } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import Voice, {
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-voice/voice';


const requestPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: "麦克风权限",
          message: "需要访问麦克风进行语音识别",
          buttonNeutral: "稍后询问",
          buttonNegative: "取消",
          buttonPositive: "确定"
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      return false;
    }
  }
  return true;
};

const LANG = "zh-CN";

export default function useVoice() {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const voiceInstance = useRef(Voice);


  const onSpeechResults = (e: SpeechResultsEvent) => {
    const result = e.value?.[0] || '';
    setText(result);
  };

  const onSpeechError = (e: SpeechErrorEvent) => {
    setError(e.error?.message || '语音识别出错');
  };

  useEffect(() => {
    let isMounted = true;

    const initVoice = async () => {
      if (!voiceInstance.current) {
        console.error('Voice 模块未加载');
        setError('Voice 模块未加载');
        return;
      }

      try {
        // 先移除所有监听器
        voiceInstance.current.removeAllListeners();

        // 设置事件监听器
        voiceInstance.current.onSpeechStart = () => {
          if (isMounted) setIsListening(true);
        };
        voiceInstance.current.onSpeechEnd = () => {
          if (isMounted) setIsListening(false);
        };
        voiceInstance.current.onSpeechStart = () => { };
        voiceInstance.current.onSpeechResults = onSpeechResults;
        voiceInstance.current.onSpeechError = onSpeechError;

      } catch (e) {
        console.error('语音服务初始化失败:', e);
        if (isMounted) {
          setError('语音服务初始化失败');
        }
      }
    };

    initVoice();

    return () => {
      isMounted = false;
      if (voiceInstance.current) {
        try {
          voiceInstance.current.removeAllListeners();
          voiceInstance.current.destroy().catch(() => { });
        } catch (e) {
          console.error('清理 Voice 实例时出错:', e);
        }
      }
    };
  }, []);


  const startListening = async () => {
    if (!Voice) {
      setError('语音服务未初始化');
      return;
    }

    try {
      setError('');
      setText('');

      // 检查 Voice 实例
      if (!Voice) {
        throw new Error('Voice 模块未初始化');
      }

      // 请求权限
      const hasPermission = await requestPermission();
      if (!hasPermission) {
        setError('未授予麦克风权限');
        return;
      }

      // 确保之前的会话已经停止
      // await Voice.stop().catch(() => { });
      // await Voice.destroy().catch(() => { });

      // 重新开始
      setIsListening(true);
      // await Voice.start(LANG);
      await voiceInstance.current.start(LANG);
    } catch (e) {
      console.error('启动语音识别失败:', e);
      setError('无法启动语音识别');
      setIsListening(false);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (e) {
      console.error('语音识别错误:', e);
      setError('停止语音识别失败');
    }
  };

  return {
    isListening,
    text,
    error,
    startListening,
    stopListening,
  };
}