let score= JSON.parse(localStorage.getItem('score'))|| {
  Wins: 0,
  Losses: 0,
  Ties: 0
};

  updateScoreElem();

  function playGame(playerMove) {
    const compMove= pickCompMove();
    let result='';

  if(playerMove==='Scissors'){
    if(compMove==='Rock')
    {
      result='You Lost';
    }
    else if(compMove==='Paper')
    {
      result='You Won';
    }
    else if(compMove==='Scissors')
    {
      result='You Tied'
    }

  }else if(playerMove==='Paper'){
    if(compMove==='Rock')
    {
      result='You Won';
    }
    else if(compMove==='Paper')
    {
      result='You Tied';
    }
    else if(compMove==='Scissors')
    {
      result='You Lost';
    }

  }else if(playerMove==='Rock'){
    if(compMove==='Rock')
    {
      result='You Tied';
    }
    else if(compMove==='Paper')
    {
      result='You Lost';
    }
    else if(compMove==='Scissors')
    {
      result='You Won';
    }
  }

  if(result=== 'You Won'){
    score.Wins++;
  }else if(result==='You Lost'){
    score.Losses++;
  }else if(result==='You Tied'){
    score.Ties++;
  }

  localStorage.setItem('score',JSON.stringify(score));

  updateScoreElem();

  document.querySelector('.js-moves').innerHTML=`You <img src="game-emojis/${playerMove}-emoji.png" class="move-icon"> <img src="game-emojis/${compMove}-emoji.png" class="move-icon"> Computer`;

  document.querySelector('.js-result').innerHTML = result;
  
  }

  function updateScoreElem(){
    document.querySelector('.js-score')
      .innerHTML=`Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
  }
function pickCompMove() {
      const  randomNumber=Math.random();
        let compMove='';
    if(randomNumber>=0 && randomNumber<1/3)
    {
      compMove='Rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3)
    {
      compMove='Paper';
    }
    else if(randomNumber>=2/3 && randomNumber<1)
    {
      compMove='Scissors';
    }

    return compMove;
  }