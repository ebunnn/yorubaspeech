from flask import Flask, request
import pygame

app = Flask(__name__)


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



if __name__ == "__main__":
    app.run()