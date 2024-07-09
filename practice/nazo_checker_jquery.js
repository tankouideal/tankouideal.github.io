function AnswerCheck(form){
  try{
    // 連打を防止するために、送信ボタンを無効化する
    $(form).find('button[type=submit]').prop('disabled', true);
    // 入力欄に入っている文字列を拾う
    send_text = $(form).children("input[type=text]")[0].value;
    // 入力欄が空のとき、送信せず、エラーメッセージを出す
    if(send_text.length == 0){
    $(form).next(".result").text("入力欄が空です");
      return false;
    }

}
