AFRAME.registerComponent('sound-handler', {
    init: function () {
        let sound = new Audio("./assets/sounds/heart-beat.mp3")

        sound.loop = true

        this.el.sceneEl.addEventListener('markerFound', () => {
            console.log("Found AR Target");
    
            sound.play()
          });

        this.el.sceneEl.addEventListener('markerLost', () => {
            console.log("Lost AR Target");

            sound.pause()
        });
    }
  });

  AFRAME.registerComponent('button-handler', {
    init: function () {
  
      const heartModel = document.querySelector('.clickable');
  
      document.getElementById('button1').addEventListener('click', function () {
        console.log("Button 1 clicked");
        heartModel.setAttribute('rotation', '0 45 0');
      });
  
      document.getElementById('button2').addEventListener('click', function () {
        console.log("Button 2 clicked");
        heartModel.setAttribute('rotation', '0 -45 -45');
      });
    }
  });