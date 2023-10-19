function imgchange() {
    var myImages1 = new Array();
    
    myImages1[1] = "../Assets/Stop/1.JPG";
    myImages1[2] = "../Assets/Stop/2.JPG";
    myImages1[3] = "../Assets/Stop/3.JPG";
    myImages1[4] = "../Assets/Stop/4.JPG"; //Image Array
    myImages1[5] = "../Assets/Stop/5.JPG";
    myImages1[6] = "../Assets/Stop/6.JPG";
    myImages1[7] = "../Assets/Stop/7.JPG";
    myImages1[8] = "../Assets/Stop/8.JPG";
    myImages1[9] = "../Assets/Stop/9.JPG";
    myImages1[10] = "../Assets/Stop/10.JPG";
    myImages1[11] = "../Assets/Stop/11.JPG";
    myImages1[12] = "../Assets/Stop/12.JPG";
    myImages1[13] = "../Assets/Stop/13.JPG";
    myImages1[14] = "../Assets/Stop/14.JPG";
    myImages1[15] = "../Assets/Stop/15.JPG";
    myImages1[16] = "../Assets/Stop/16.JPG";
    myImages1[17] = "../Assets/Stop/17.JPG";
    myImages1[18] = "../Assets/Stop/18.JPG";
    myImages1[19] = "../Assets/Stop/19.JPG";
    myImages1[20] = "../Assets/Stop/20.JPG";
    myImages1[21] = "../Assets/Stop/21.JPG";
    myImages1[22] = "../Assets/Stop/22.JPG";
    myImages1[23] = "../Assets/Stop/23.JPG";
    myImages1[24] = "../Assets/Stop/24.JPG";
    myImages1[25] = "../Assets/Stop/25.JPG";
    myImages1[26] = "../Assets/Stop/26.JPG";
    // myImages1[27] = "../Assets/Stop/27.JPG";
    myImages1[28] = "../Assets/Stop/28.JPG";
    myImages1[29] = "../Assets/Stop/29.JPG";
    myImages1[30] = "../Assets/Stop/30.JPG";
    myImages1[31] = "../Assets/Stop/31.JPG";
    myImages1[32] = "../Assets/Stop/32.JPG";
    myImages1[33] = "../Assets/Stop/33.JPG";
    myImages1[34] = "../Assets/Stop/34.JPG";
    myImages1[35] = "../Assets/Stop/35.JPG";
    myImages1[36] = "../Assets/Stop/36.JPG";
    myImages1[37] = "../Assets/Stop/37.JPG";
    myImages1[38] = "../Assets/Stop/38.JPG";
    myImages1[39] = "../Assets/Stop/39.JPG";
    myImages1[40] = "../Assets/Stop/40.JPG";
    myImages1[42] = "../Assets/Stop/42.JPG";
    myImages1[43] = "../Assets/Stop/43.JPG";
    myImages1[44] = "../Assets/Stop/44.JPG";
    myImages1[46] = "../Assets/Stop/46.JPG";
    myImages1[47] = "../Assets/Stop/47.JPG";
    myImages1[49] = "../Assets/Stop/49.jpeg";
    myImages1[50] = "../Assets/Stop/50.JPG";
    myImages1[51] = "../Assets/Stop/51.JPG";
    myImages1[52] = "../Assets/Stop/52.JPG";
    myImages1[54] = "../Assets/Stop/54.JPG";
    myImages1[55] = "../Assets/Stop/55.JPG";
    myImages1[56] = "../Assets/Stop/56.JPG";
    myImages1[57] = "../Assets/Stop/57.JPG";
    myImages1[58] = "../Assets/Stop/58.JPG";
    myImages1[59] = "../Assets/Stop/59.jpeg";
    myImages1[60] = "../Assets/Stop/60.jpeg";
    myImages1[61] = "../Assets/Stop/61.jpeg";
    myImages1[62] = "../Assets/Stop/62.jpg";
    myImages1[63] = "../Assets/Stop/63.jpg";
    myImages1[64] = "../Assets/Stop/64.jpg";
    myImages1[65] = "../Assets/Stop/65.jpg";
    myImages1[66] = "../Assets/Stop/66.jpg";
    myImages1[67] = "../Assets/Stop/67.jpg";
    myImages1[68] = "../Assets/Stop/68.jpg";
    myImages1[69] = "../Assets/Stop/69.jpg";
    myImages1[70] = "../Assets/Stop/70.jpg";
    myImages1[71] = "../Assets/Stop/71.jpg";
    myImages1[72] = "../Assets/Stop/72.jpg";
    myImages1[73] = "../Assets/Stop/73.jpg";
    myImages1[74] = "../Assets/Stop/74.jpg";
    myImages1[75] = "../Assets/Stop/75.jpg";
    myImages1[76] = "../Assets/Stop/76.jpg";
    myImages1[77] = "../Assets/Stop/77.jpg";
    myImages1[78] = "../Assets/Stop/78.jpg";
    myImages1[79] = "../Assets/Stop/79.jpg";
    myImages1[80] = "../Assets/Stop/80.jpg";
    myImages1[81] = "../Assets/Stop/81.jpg";
    myImages1[82] = "../Assets/Stop/82.jpg";
    myImages1[83] = "../Assets/Stop/83.jpg";
    myImages1[84] = "../Assets/Stop/84.jpg";
    myImages1[85] = "../Assets/Stop/85.jpg";
    myImages1[86] = "../Assets/Stop/86.jpg";
    myImages1[87] = "../Assets/Stop/87.jpg";
    myImages1[88] = "../Assets/Stop/98.jpg";
    myImages1[89] = "../Assets/Stop/99.jpg";
    myImages1[90] = "../Assets/Stop/90.jpg";
    myImages1[91] = "../Assets/Stop/91.jpg";
    myImages1[92] = "../Assets/Stop/92.jpg";
    myImages1[93] = "../Assets/Stop/93.jpg";
    myImages1[94] = "../Assets/Stop/94.jpg";
    myImages1[95] = "../Assets/Stop/95.jpg";
    myImages1[96] = "../Assets/Stop/96.jpg";
    myImages1[97] = "../Assets/Stop/97.jpg";
    myImages1[98] = "../Assets/Stop/98.jpg";
    myImages1[99] = "../Assets/Stop/99.jpg";
    myImages1[100] = "../Assets/Stop/100.jpg";
    myImages1[101] = "../Assets/Stop/101.jpg";
    myImages1[102] = "../Assets/Stop/102.jpg";

    var rnd = Math.floor(Math.random() * myImages1.length); // Random Choice of Image
    if (rnd == 0) {
      rnd = 1;
    }
  
    document.getElementById("gen-img").src = myImages1[rnd]; //Gets Image
  }
  


  // from gp:

  var currentAudio = null;

  function playRandomSound() {
    if (currentAudio) {
      currentAudio.pause();
    }
    var soundFileNames = [
      "Stop1", // Without the file extension
      "Stop2", // Add more file names without extensions
      "Stop3",
      "Stop4",
      "Stop5",
      "Stop6",
      "Stop7",
      "Stop8",
      "Stop9",
      "Stop10",
      "Stop11",
      "Stop12",
      "Stop13",
      "Stop14",
      "Stop15",
      "Stop16",
      "Stop17",
      "Stop18",
      "Stop19",
      "Stop20",
      "Stop21",
      "Stop22",
      "Stop23",
      "Stop24",
      "Stop25",
      "Stop26",
      "Stop27",
      "Stop28",
      "Stop29",
      "Stop30",
      "Stop31",
      "Stop32"
    ];
  
    // Randomly select a file name
    var selectedFileName = soundFileNames[Math.floor(Math.random() * soundFileNames.length)];
  
    // Construct the relative URL to the audio file
    var soundURL = '../Assets/Audios/Stop/' + selectedFileName + '.mp3';
  
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