import eel as e

e.init("Fee-Project")

@e.expose

def App():
    print("Application Running !")
    
App()

e.start("index.html", size=(800, 600))