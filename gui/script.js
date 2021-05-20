async function path(){
    var path_now = await eel.check_path()();
    document.getElementById('paths').placeholder = path_now
    elements()
}


async function elements(){
    var length_elements = await eel.length()();
    var exe = await eel.exe()();
    var py = await eel.py()();

    var stop1=0
    var stop2=0
    for(var i=0; i<length_elements; i++ ){
        var img = document.createElement("img");
        if (exe == '.exe' && stop1 == 0){
            img.height = 50;
            img.width = 50;
            img.src = 'https://image.flaticon.com/icons/png/512/29/29614.png'
            stop1=1
        }

        else if (py == '.py' && stop2 == 0){
            img.height = 50;
            img.width = 50;
            img.src = 'https://image.flaticon.com/icons/png/512/28/28884.png'
            stop2=1
        }
        var element = document.getElementById("new");
        element.appendChild(img);
    }
    console.log(length_elements)
}

path()