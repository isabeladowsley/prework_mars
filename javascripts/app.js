// Rover Object Goes Here

  var rover = {
    direction:"N",
    x: 0,
    y: 0,
    travelLog: ["x=0,y=0"],
  };

// TurnLeft Function

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W"
      break;
    case "W":
      rover.direction = "S"
      break;
    case "S":
      rover.direction = "E"
      break;
    case "E":
      rover.direction = "N"
      break;
  };
};
 

// TurnRight Function 

function turnRight(){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E"
      break;
    case "E":
      rover.direction = "S"
      break;
    case "S":
      rover.direction = "W"
      break;
    case "W":
      rover.direction = "N"
      break;
  };
};


// MoveFoward Function

function moveForward(rover){
  console.log("moveForward was called")
  switch(rover.direction) {
    case "N":
      rover.y = rover.y - 1;
      console.log("Moved to (" + rover.x + "," + rover.y + ")");
      break;
    case "S":
      rover.y = rover.y + 1;
      console.log("Moved to (" + rover.x + "," + rover.y + ")");
      break;
    case 'W':
      rover.x = rover.x - 1;
      console.log("Moved to (" + rover.x + "," + rover.y + ")");
      break;
    case 'E':
      rover.x = rover.x + 1;
      console.log("Moved to (" + rover.x + "," + rover.y + ")");
      break;
  };
};



// MoveBackwards Function

function moveBackwards() {
  console.log('moveBackwards was called');
  switch (rover.direction) {
    case 'N':
      rover.y = rover.y + 1;
      console.log("Moved to (" + rover.x + "," + rover.y + ")");
      break;
    case 'S':
      rover.y = rover.y - 1;
      console.log("Moved to (" + rover.x + "," + rover.y + ")");
      break;
    case 'W':
      rover.x = rover.x + 1;
      console.log("Moved to (" + rover.x + "," + rover.y + ")");
      break;
    case 'E':
      rover.x = rover.x - 1;
      console.log("Moved to (" + rover.x + "," + rover.y + ")");
      break;
  };
};


// Command Function

function receiveCommand(command){
  console.log("receive Command Was Called")

  for (var i = 0; i < command.length; i++) {
    switch(command[i]) {
      case "f":
        moveForward(rover);
        rover.travelLog.push("x=" + rover.x + ",y=" + rover.y); 
        break;
      case 'b':
        moveBackwards(rover);
        rover.travelLog.push("x=" + rover.x + ",y=" + rover.y);
				break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
    };
  };
  console.log(rover.travelLog);
};
