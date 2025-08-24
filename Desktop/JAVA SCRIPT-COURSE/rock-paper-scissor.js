let score=JSON.parse(localStorage.getItem('score')) || {
          wins:0,
          losses:0,
          ties:0,
        };  
      function playGame(playermove){
        const comp=pickComputermove();
      let results='';
        if(playermove==='paper'){
            if('rock'===comp){
              results='win'; 
            }else if(comp==='scissor'){
              results='lose';
            }else if(comp==='paper'){
              results='tie';
            }
          }
        if(playermove==='scissor'){
          if('rock'===comp){
            results='lose';
          }else if(comp==='scissor'){
            results='tie';
          }else if(comp==='paper'){
            results='win';
          }
        }
        if(playermove==='rock'){
          if('rock'===comp){
            results='tie';
          }else if(comp==='scissor'){
            results='win';
          }else if(comp==='paper'){
            results='lose';
          }
        }
        if(results==='tie'){
          score.ties+=1;
        }else if(results==='win'){
          score.wins+=1;
        }else if(results==='lose'){
          score.losses+=1;
        }
        localStorage.setItem('score',JSON.stringify(score));

        document.querySelector('.js-score').innerHTML=`wins:${score.wins}|losses:${score.losses}|ties:${score.ties}`;

        document.querySelector('.js-whowins').innerHTML=`${results}`;

        document.querySelector('.js-whomoves').innerHTML=`you
      <img src="${playermove}-emoji.png" class="move-icon">
      <img src="${comp}-emoji.png" class="move-icon">`;
      }


      function pickComputermove() {
        const pick=Math.random();
      let comp='';
      if(pick>0&&pick<1/3){
        comp='rock';
      }else if(pick>1/3&&pick<2/3){
        comp='paper';
      }else if(pick>2/3&&pick<1){
        comp='scissor';
      }
      return comp;
      }