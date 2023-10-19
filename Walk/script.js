function imgchange() {
    var myImages1 = new Array();
    
    myImages1[1] = "../Assets/walk/1.JPG";
    myImages1[2] = "../Assets/walk/2.JPG";
    myImages1[3] = "../Assets/walk/3.JPG";
    myImages1[4] = "../Assets/walk/4.JPG"; //Image Array
    myImages1[5] = "../Assets/walk/5.JPG";
    myImages1[6] = "../Assets/walk/6.JPG";
    myImages1[7] = "../Assets/walk/7.JPG";
    myImages1[8] = "../Assets/walk/8.JPG";
    myImages1[9] = "../Assets/walk/9.JPG";
    myImages1[10] = "../Assets/walk/10.JPG";
    myImages1[11] = "../Assets/walk/11.JPG";
    myImages1[12] = "../Assets/walk/12.JPG";
    myImages1[13] = "../Assets/walk/13.JPG";
    myImages1[14] = "../Assets/walk/14.JPG";
    myImages1[15] = "../Assets/walk/15.JPG";
    myImages1[16] = "../Assets/walk/16.JPG";
    myImages1[17] = "../Assets/walk/17.JPG";
    myImages1[18] = "../Assets/walk/18.JPG";
    myImages1[19] = "../Assets/walk/19.JPG";
    myImages1[20] = "../Assets/walk/20.JPG";
    myImages1[21] = "../Assets/walk/21.JPG";
    myImages1[22] = "../Assets/walk/22.JPG";
    myImages1[23] = "../Assets/walk/23.JPG";
    myImages1[24] = "../Assets/walk/24.JPG";
    myImages1[25] = "../Assets/walk/25.JPG";
    myImages1[26] = "../Assets/walk/26.jpeg";
    myImages1[27] = "../Assets/walk/27.jpeg";
    myImages1[28] = "../Assets/walk/28.JPG";
    myImages1[29] = "../Assets/walk/29.jpg";
    myImages1[30] = "../Assets/walk/30.jpg";
    myImages1[31] = "../Assets/walk/31.jpg";
    myImages1[32] = "../Assets/walk/32.jpg";
    myImages1[33] = "../Assets/walk/33.jpg";
    myImages1[34] = "../Assets/walk/34.jpg";
    myImages1[35] = "../Assets/walk/35.jpg";
    myImages1[36] = "../Assets/walk/36.jpg";
    myImages1[37] = "../Assets/walk/37.jpg";
    myImages1[38] = "../Assets/walk/38.jpg";
    myImages1[39] = "../Assets/walk/39.jpg";
    myImages1[40] = "../Assets/walk/40.jpg";
    myImages1[42] = "../Assets/walk/42.jpg";
    myImages1[43] = "../Assets/walk/43.jpg";
    myImages1[44] = "../Assets/walk/44.jpg";
    myImages1[45] = "../Assets/walk/45.jpg";
    myImages1[46] = "../Assets/walk/46.jpg";
    myImages1[47] = "../Assets/walk/47.jpg";
    myImages1[48] = "../Assets/walk/48.jpg";
    myImages1[49] = "../Assets/walk/49.jpg";
    myImages1[50] = "../Assets/walk/50.jpg";
    myImages1[51] = "../Assets/walk/51.jpg";

    var rnd = Math.floor(Math.random() * myImages1.length); // Random Choice of Image
    if (rnd == 0) {
      rnd = 1;
    }
  
    document.getElementById("gen-img").src = myImages1[rnd]; //Gets Image
  }
  

  var currentAudio = null;

  function playRandomSound() {
    if (currentAudio) {
      currentAudio.pause();
    }
    var soundFileNames = [
      "Walk1", // Without the file extension
      "Walk2", // Add more file names without extensions
      "Walk3",
      "Walk4",
      "Walk5",
      "Walk6",
      "Walk7",
      "Walk8",
      "Walk9",
      "Walk10",
      "Walk11",
      "Walk12",
      "Walk13",
      "Walk14",
      "Walk15",
      "Walk16",
      "Walk17",
      "Walk18",
      "Walk19",
      "Walk20",
      "Walk21",
      "Walk22",
      "Walk23",
      "Walk24",
      "Walk25",
      "Walk26",
      "Walk27",
      "Walk28",
      "Walk29",
      "Walk30",
      "Walk31",
      "Walk32"
    ];
  
    
    // Randomly select a file name
    var selectedFileName = soundFileNames[Math.floor(Math.random() * soundFileNames.length)];
  
    // Construct the relative URL to the audio file
    var soundURL = '../Assets/Audios/Walk/' + selectedFileName + '.mp3';
  
    // Create an Audio element and play the selected sound
    var audio = new Audio(soundURL);
    audio.play();

    currentAudio = audio;
  
    // Optionally, you can display the name of the currently playing sound
    document.getElementById("Button").innerHTML =
      'Now playing: ' + selectedFileName;
  }



  // function playRandomSound() {
  
  //   //An array to house all of the URLs of your sounds
  //   var sounds = [
  //     new Audio(
  //       "https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
  //     ),
  //   ];
  
  //   // var sounds = new Audio([
  //   //   ("sound1.mp3", "sound2.mp3", "sound3.mp3", "sound4.mp3")
  //   // ]();
  
  //   //This line will select a random sound to play out of your provided URLS
  //   var soundFile = sounds[Math.floor(Math.random() * sounds.length)];
  //   soundFile.play()
  
  //   //Find the player element that you created and generate an embed file to play the sound within it
  //   document.getElementById("Button").innerHTML =
  //     '<embed src="' +
  //     soundFile +
  //     '" hidden="true" autostart="true" loop="false" />';
  // }