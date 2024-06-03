from flask import Flask, request
from flask_cors import CORS
import pygame

app = Flask(__name__)
CORS(app)

@app.route('/play_words', methods=['POST'])
def play_sounds():
    data = request.get_json()
    word = data['word']

    

    def play_e():
        pygame.init()
        e_sound = "e.mp3"
        é_sound = "é.mp3"
        r_sound = "r.mp3"

        word = input("Type a Yoruba word: ")

        for letter in word:
            if letter == "e":
                pygame.mixer.music.load(e_sound)
                pygame.mixer.music.play()
                while pygame.mixer.music.get_busy():
                    pygame.time.Clock().tick(10)
            elif letter == "é":
                pygame.mixer.music.load(é_sound)
                pygame.mixer.music.play()
                while pygame.mixer.music.get_busy():
                    pygame.time.Clock().tick(10)
            elif letter == "r":
                pygame.mixer.music.load(r_sound)
                pygame.mixer.music.play()
                while pygame.mixer.music.get_busy():
                    pygame.time.Clock().tick(10)


        pygame.quit()


    play_e()









    return "Sounds played successfully"





if __name__ == "__main__":
    app.run()