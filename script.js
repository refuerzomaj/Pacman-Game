
        var newPacman, newGhost, newWorld;
        var pacmanDirection = "right";
        var ghosts = ['ghost','ghost1'];
        var coinCount = 0;
        var cherryCount = 0;
        var boolCoin = false;
        var boolCherry = false;
        var move = [0,1,2,3,4];
        var map1 = [
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,2],
            [2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2],
            [2,1,2,3,2,3,2,1,2,3,2,3,2,3,2,1,2,3,2,3,2,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,2,2,2,1,2,2,2,2,2,1,2,1,2,2,3,2,2,1,2,2,2,2],
            [0,0,0,2,1,1,1,1,1,1,1,2,1,1,2,2,2,1,1,2,0,0,0],
            [0,0,0,2,1,1,2,2,2,1,1,2,1,1,1,1,1,1,1,2,0,0,0],
            [2,2,2,2,1,2,2,3,2,2,1,2,1,2,2,2,2,2,1,2,2,2,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,2,3,2,3,2,1,2,3,2,3,2,3,2,1,2,3,2,3,2,1,2],
            [2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
        ];
        var map2 = [
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,3,0,2],
            [2,1,2,2,2,1,2,1,1,1,1,2,1,2,2,2,1,2,3,3,3,3,2],
            [2,1,2,1,1,1,2,2,2,2,2,2,1,1,1,2,1,2,3,3,3,3,2],
            [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,0,3,3,3,3,2],
            [2,1,1,1,1,1,2,2,1,1,2,2,1,1,1,1,1,2,3,3,3,3,2],
            [2,1,2,2,1,1,1,2,1,1,2,1,1,1,2,2,1,2,3,3,3,3,2],
            [2,1,2,2,1,1,1,2,1,1,2,1,1,1,2,2,1,2,3,3,3,3,2],
            [2,1,1,1,1,1,2,2,1,1,2,2,1,1,1,1,1,2,2,2,2,2,2],
            [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2],
            [2,1,2,1,1,1,2,2,2,2,2,2,1,1,1,2,1,2,0,2,2,2,2],
            [2,1,2,2,2,1,2,1,1,1,1,2,1,2,2,2,1,2,0,0,0,0,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0,0,0,0,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
        ];
        var map3 = [
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,0,2,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,3,3,3,3,2],
            [2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,3,3,3,3,3,3,2],
            [2,1,1,1,1,1,1,1,1,2,1,2,1,1,1,2,3,3,3,3,3,3,2],
            [2,1,2,2,2,2,1,2,2,2,1,2,1,2,2,2,2,2,2,1,1,2,2],
            [2,1,2,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,2,1,2,2,1,1,1,2,2,2,1,2,2,2,2,2,2,2,2,1,2],
            [2,1,1,1,2,1,1,2,1,2,1,1,1,1,2,2,2,2,2,2,2,1,2],
            [2,1,2,1,2,1,2,2,1,2,1,2,2,1,1,1,1,1,1,1,1,1,2],
            [2,1,2,1,1,1,2,1,1,1,1,1,2,2,2,1,2,2,2,1,2,1,2],
            [2,1,2,1,2,1,2,1,2,2,2,1,1,1,1,1,2,1,1,1,2,1,2],
            [2,1,2,1,2,1,1,1,2,1,2,2,2,2,2,1,2,1,2,2,2,1,2],
            [2,1,2,1,2,1,2,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
        ];
        var map4 = [
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,2],
            [2,1,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,1,2],
            [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2],
            [2,1,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,1,2],
            [2,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2],
            [2,1,1,1,2,1,1,1,3,3,3,3,3,3,3,1,1,1,2,1,1,1,2],
            [2,1,1,1,2,1,1,1,3,3,3,3,3,3,3,1,1,1,2,1,1,1,2],
            [2,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2],
            [2,1,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,1,2],
            [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2],
            [2,1,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
        ];
        var map5 = [
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,3,3,0,2],
            [2,1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,2],
            [2,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,2,3,3,3,3,3,2],
            [2,1,2,1,1,1,1,1,1,1,2,1,2,1,2,2,2,0,2,2,2,2,2],
            [2,1,2,1,1,1,1,1,1,1,2,1,2,1,2,1,1,1,1,1,1,1,2],
            [2,1,2,1,1,1,1,1,1,1,1,1,2,1,2,1,2,2,2,1,2,1,2],
            [2,1,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,1,2,1,2,1,2],
            [2,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2],
            [2,1,2,1,2,2,2,1,2,2,2,2,2,2,2,1,2,1,2,1,2,1,2],
            [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2],
            [2,1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1,2,1,2,2,2],
            [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,0,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
        ];
        var maps = [map1,map2,map3,map4,map5];
        var world = maps[Math.floor(Math.random() * maps.length)];
        var pacman = {
            x: 1,
            y: 1
        };
        var ghost = {
            x: 21,
            y: 1
        }
        var ghost1 = {
            x: 21,
            y: 12
        }
        var score = 0;

        function displayWorld(){
            var countCherry = 0;
            var countCoin = 0;
            var output = '';
            for(var i=0; i<world.length; i++){
                output += "<div class='row'>";
                for(var j=0; j<world[i].length; j++){
                    if(world[i][j] == 3){
                        output += "<div class='cherry'></div>";
                        countCoinAndCherry(3);
                    }
                    else if(world[i][j] == 2){
                        output += "<div class='brick'></div>";
                    }
                    else if(world[i][j] == 1){
                        output += "<div class='coin'></div>";
                        countCoinAndCherry(1);
                    }
                    else if(world[i][j] == 0){
                        output += "<div class='empty'></div>";
                    }
                }
                output += "</div>";
            }
            console.log(cherryCount);
            console.log(coinCount);
            boolCherry = true;
            boolCoin = true;
            document.getElementById('world').innerHTML = output;
        }
        function countCoinAndCherry(num){
            if(num == 3 && boolCherry == false){
                cherryCount++;
            }
            else if(num == 1 && boolCoin == false){
                coinCount++;
            }
        }
        function displayPacman(){//display pacman
            document.getElementById('pacman').style.top = pacman.y*20+"px";
            document.getElementById('pacman').style.left = pacman.x*20+"px";
            if(pacmanDirection == "right"){
                document.querySelector("#pacman").style.transform = "rotate(0deg)";//rotate to right
            }
            else if(pacmanDirection == "left"){
                document.querySelector("#pacman").style.transform = "rotate(180deg)";//rotate to left
            }
            else if(pacmanDirection == "up"){
                document.querySelector("#pacman").style.transform = "rotate(270deg)";//rotate to up
            }
            else if(pacmanDirection == "down"){
                document.querySelector("#pacman").style.transform = "rotate(90deg)";//rotate to down
            }
        }
        function pacmanCaught(){
            if((ghost.x == pacman.x && ghost.y == pacman.y)||(ghost1.x == pacman.x && ghost1.y == pacman.y)){
                resetGame();
            }
        }
        function ghostChase(){//This is the function that the ghost will chase pacman
            if(world[ghost1.y][ghost1.x-1] != 2 && ghost1.x>pacman.x){//ghost move left
                    ghost1.x--;
            }
            else if(world[ghost1.y][ghost1.x+1] != 2 && ghost1.x<pacman.x){//ghost move right
                    ghost1.x++;
            }
            else if(world[ghost1.y-1][ghost1.x] != 2 && ghost1.y>pacman.y){//ghost move up
                    ghost1.y--;
            }
            else if(world[ghost1.y+1][ghost1.x] != 2 && ghost1.y<pacman.y){//ghost move down
                    ghost1.y++;
            }
            pacmanCaught();
        }
        function ghostMove(){//This is the function that the ghost will move random
            var randomMove = move[Math.floor(Math.random() * move.length)];
            console.log(randomMove);
            if(randomMove == 1){
                if(world[ghost.y-1][ghost.x] != 2){
                    ghost.y--;
                }
            }
            else if(randomMove == 2){
                if(world[ghost.y][ghost.x+1] != 2){
                    ghost.x++;
                }
            }
            else if(randomMove == 3){
                if(world[ghost.y+1][ghost.x] != 2){
                    ghost.y++;
                }
            }
            else if(randomMove == 4){
                if(world[ghost.y][ghost.x-1] != 2){
                    ghost.x--;
                }
            }
            pacmanCaught();
            displayGhost();
        }
        function playerWon(num){
            if(num == 1){
                coinCount--;
                console.log(coinCount);
            }
            else if(num == 3){
                cherryCount--;
                console.log(cherryCount);
            }
            if(coinCount == 0 && cherryCount == 0){
                alert('You won');
                resetGame();
            }
        }
        function displayGhost(){
            document.getElementById('ghost').style.top = ghost.y*20+"px";
            document.getElementById('ghost').style.left = ghost.x*20+"px";
            document.getElementById('ghost1').style.top = ghost1.y*20+"px";
            document.getElementById('ghost1').style.left = ghost1.x*20+"px";
        }
        function displayScore(){
            document.getElementById('score').innerHTML = 'Score : '+score;
        }
        function resetGame(){//restart the game
            location.reload();
        }
        function start(){//start the game
            startWorld = world;
            startPositionPacman = pacman;
            startPositionGhost = ghost;
            displayWorld();
            displayPacman();
            displayGhost();
            setInterval(ghostMove,500);
            setInterval(ghostChase,1200);
        }
        start();
        document.onkeydown = function(e){
            var leftD = world[pacman.y][pacman.x-1];
            var rightD = world[pacman.y][pacman.x+1];
            var upD = world[pacman.y-1][pacman.x];
            var downD = world[pacman.y+1][pacman.x];
            if(e.keyCode == 37){//arrow Left
                if(leftD != 2){//pacman move left
                    playerWon(leftD);
                    pacman.x--;
                    pacmanDirection = "left";
                }
            }
            if(e.keyCode == 39){//arrow Right
                if(rightD != 2){//pacman move right
                    playerWon(rightD);
                    pacman.x++;
                    pacmanDirection = "right";
                }
            }
            if(e.keyCode == 40){//arrow Down
                if(downD != 2){//pacman move down
                    playerWon(downD);
                    pacman.y++;
                    pacmanDirection = "down";
                }
            }
            if(e.keyCode == 38){//Arrow Top
                if(upD != 2){//pacman move up
                    playerWon(upD);
                    pacman.y--;
                    pacmanDirection = "up";
                }
            }
            if(world[pacman.y][pacman.x] == 1){//pacman location in world is equals to 1
                world[pacman.y][pacman.x] = 0;//set 1 to 0
                score+=10;
            }
            else if(world[pacman.y][pacman.x] == 3){
                world[pacman.y][pacman.x] = 0;//set 1 to 0
                score+=20;
            }
            console.log(e.keyCode);
            displayPacman();
            displayScore();
            displayWorld();
        }