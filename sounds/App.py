from flask import Flask, request, jsonify
from flask_cors import CORS
import pygame
import time
import threading

app = Flask(__name__)
CORS(app)


yoruba_words = []

@app.route('/play-words', methods=['GET'])
def fetch_words():
    return jsonify({"yorubaWords": yoruba_words})

@app.route('/post-words', methods=["POST"])
def post_words():
    new_word = request.json.get("yorubaWord", "")
    yoruba_words.append(new_word)

    for letter in new_word:
        sound_file = f"src/Letter Sounds/Segun/{letter}-s trim.mp3"
        print("Playing file: ", sound_file)
        playSound(sound_file)

    return jsonify({"yorubaWords": yoruba_words})

def playSound(sound):
    pygame.mixer.init()
    try:
        print(f"Loading sound file: {sound}")
        pygame.mixer.music.load(sound)
        pygame.mixer.music.play()
        while pygame.mixer.music.get_busy():
            time.sleep(1)
    except pygame.error as e:
        print(f"Error loading or playing sound: {e}")

# Ensure the file path is correct
# sound_file = "src/Letter Sounds/Segun/à-s trim.mp3"

# Print a message to confirm the file path
print(f"Attempting to play sound file")



print("Sound playback finished.")

if __name__ == "__main__":
    app.run(debug=True, port=5001)

# from flask import Flask, request
# from flask_cors import CORS
# import pygame

# app = Flask(__name__)
# CORS(app)

# @app.route('/play_words', methods=['POST'])
# def play_sounds():
#     data = request.get_json()
#     word = data['word']

    

#     def play_e():
#         pygame.init()
#         e_sound = "e.mp3"
#         é_sound = "é.mp3"
#         r_sound = "r.mp3"

#         word = input("Type a Yoruba word: ")

#         for letter in word:
#             if letter == "e":
#                 pygame.mixer.music.load(e_sound)
#                 pygame.mixer.music.play()
#                 while pygame.mixer.music.get_busy():
#                     pygame.time.Clock().tick(10)
#             elif letter == "é":
#                 pygame.mixer.music.load(é_sound)
#                 pygame.mixer.music.play()
#                 while pygame.mixer.music.get_busy():
#                     pygame.time.Clock().tick(10)
#             elif letter == "r":
#                 pygame.mixer.music.load(r_sound)
#                 pygame.mixer.music.play()
#                 while pygame.mixer.music.get_busy():
#                     pygame.time.Clock().tick(10)


#         pygame.quit()


#     play_e()









#     return "Sounds played successfully"





# if __name__ == "__main__":
#     app.run()