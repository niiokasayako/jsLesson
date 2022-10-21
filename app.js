// if文
let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else  {
  alert('みかんの値段がりんごより高い');
}

// While文
// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max +'を超えるのに必要だった回数は' + count + '回です');


// for文
// let i;
// let num = 0;

// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');

// let i;
// let num = 0;

// for (i = 1; i <11; i++){
//   num =num - i;
// }

// alert('1から10まで引き算した結果は' + num + 'です');

// let i;
// let num = 1;

// for(i = 1; i <11; i++){
//   num = num * i;
// }

// alert('1から10まで掛け算した結果は' + num + 'です');

// var str = "webcamp"

// function foo() {
//   var str
//   console.log(str)
//   str = "dmm webcamp"
//   console.log(str)
// }
// foo()

// // メイン部分
// let alertString;
// alertString = addString("WebCamp");
// // 作成した関数を呼び出す
// alert(alertString);

// // 作成した関数
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }

// let promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);

let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでくさい。');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力してください');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでくさい。');
}

let js_hand = getJShand();

let judge = winLose(user_hand, js_hand);

if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。 \nJavaScriptの選んだ手は' + js_hand + 'です。 \n結果は' + judge + 'です。');
} else {
  alert("またチェレンジしてね")
}

function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if (js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    }　else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け"
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    }　else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち"
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    }　else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ"
    }
  }

  return winLoseStr;
}