#voice
import speech_recognition as sr
# 음성 인식 객체 생성
r = sr.Recognizer()

# 마이크에서 입력받기
with sr.Microphone() as source:
    print("speeking anthing...")
    audio = r.listen(source)

def recognizeSpeech() :
    # Google Web Speech API를 사용하여 음성 인식
    try:
        # print("인식된 텍스트: " + r.recognize_google(audio, language='ko-KR'))
        recognized_text = r.recognize_google(audio,language='ko-KR');
        return {"status" : "success","message" : "음성 인식 성공","result" : recognized_text}
    except sr.UnknownValueError:
        return {"status":"err","message" : "API가 말을 이해하지 못했습니다."}
    except sr.RequestError as e:
        return {"status" : "err","message" : "API 서버에 문제가 발생했습니다."};
        # print(f"Google Web Speech API 서비스에 문제가 발생했습니다; {e}")