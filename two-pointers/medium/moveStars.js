/*

...*..*...|....*...*...*
...*..*...|...*....*...* - 1 point
........**|***..........

.*..|.**.
...*|**.. ans = 4

012345678
...|...*. ans = 6 inde of star - index of 7 - 4 = 3
    ^
012345678
       v   -> right
...|...** 7 - 4 = 3
    ^     -> free
    
...|*...* 8 - 5 = 3 
     ^
012345
..*..|

...|*...*
wall = s.indexOf('|')

let i = 0;
let j = s.length-1
let free = wall + 1;
let left = wall - 1;
let moves = 0;
let leftFree = wall - 1;
for(let right = wall + 1; right < s.length; right++) {
   if(s[right] == '*') {
      moves += right - free;
      free = free + 1;
   }

}
for(let left = wall - 1; left >= 0; left--) {
  if(s[left] == '*') {
    moves += leftFree - left;
    leftFree = leftFree - 1;
  
  }

}

return moves;


if(s[right] == '.') {
moves += 1;
right += 1
} 


*/


function moveStars(s) {
  let wall = s.indexOf('|');
  
  let free = wall + 1;
  let moves = 0;
  let leftFree = wall - 1;
  for(let right = wall + 1; right < s.length; right++) {
    if(s[right] == '*') {
      moves += right - free;
      free = free + 1;
    }
  }
  
  for(let left = wall - 1; left >= 0; left--) {
    if(s[left] == '*') {
      moves += leftFree - left;
      leftFree = leftFree - 1;
    }
  }

  return moves;
}


console.log(moveStars(".****|**.."));