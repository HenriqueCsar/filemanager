import os, eel, glob

eel.init('gui')

@eel.expose
def check_path():
    return os.getcwd()



@eel.expose
def length():
    cont=0
    for i in glob.glob('*'):
        cont=cont+1
    return cont


@eel.expose
def exe():
    for i in glob.glob('*'):
        if os.path.splitext(i)[-1] == '.exe':
            return '.exe'

@eel.expose
def py():
    for i in glob.glob('*'):
        if os.path.splitext(i)[-1] == '.py':
            return '.py'



eel.start('filemanager.html', size=(600,600))