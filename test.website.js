/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */


var quiz = {
"JS": [
{
"id": 1,
"question": "बड़ी से बड़ी तथा छोटी से छोटी 5 अंकों की संख्या है जो 0, 3, 6, 7 तथा 9 से बनती हैं जब कोई अंक दोबारा नहीं आएगा का अंतर होगा",
"options": [
{
"a": "93951",
"b": "67061",
"c": "66951",
"d": "60840"
}
],
"answer": "66951",
"score": 0,
"status": ""
},
{
"id": 2,
"question": "संख्या 584356 में अंक 5 के स्थानीय मुल्लों का योग क्या है?",
"options": [
{
"a": "10",
"b": "50050",
"c": "5050",
"d": "500050"
}
],
"answer": "500050",
"score": 0,
"status": ""
},
{
"id": 3,
"question": "987×10×14×0×8 से परिमाण मिलता है",
"options": [
{
"a": "561260",
"b": "642976",
"c": "922040",
"d": "0"
}
],
"answer": "0",
"score": 0,
"status": ""
},
{
"id": 4,
"question": "रोमन संकेत पद्धति में C का मान है",
"options": [
{
"a": "50",
"b": "100",
"c": "500",
"d": "100"
}
],
"answer": "100",
"score": 0,
"status": ""
},
{
"id": 5,
"question": "चार अंको की सबसे बड़ी तथा सबसे छोटी संख्याओं का योगफल है",
"options": [
{
"a": "8999",
"b": "10999",
"c": "111110",
"d": "111111",
}
],
"answer": "10999",
"score": 0,
"status": ""
},
{
"id": 6,
"question": "किस संख्या में 17 से भाग देने पर भागफल 23 और शेषफल 7 बचता है",
"options": [
{
"a": "328",
"b": "358",
"c": "368",
"c": "398"
}
],
"answer": "368",
"score": 0,
"status": ""
},
{
"id": 7,
"question": "एक आधा संख्या के कितने गुणनखंड होते हैं",
"options": [
{
"a": "1",
"b": "2",
"c": "3",
"d": "4"
}
],
"answer": "2",
"score": 0,
"status": ""
},
{
"id": 8,
"question": "25 से छोटे 3 के सभी गुणों की संख्या है?",
"options": [
{
"a": "6",
"b": "7",
"c": "8",
"d": " 9",
}
],
"answer": "8",
"score": 0,
"status": ""
},
{
"id": 9,
"question": "निम्नलिखित में से कौन सी संख्या 11 के गुणज है",
"options": [
{
"a": "121",
"b": "131",
"c": "141",
"d": "All of the above."
}
],
"answer": "121",
"score": 0,
"status": ""
},
{
"id": 10,
"question": "4 अंको की छोटी से छोटी संख्या जो 2 , 3 , 8 , 10  से  पूर्णत: विभाजित हो है",
"options": [
{
"a": "1020",
"b": "1000",
"c": "1080",
"d": "1120",
}
],
"answer": "1080",
"score": 0,
"status": ""
},


]
}

var quizApp = function () {
this.score = 0;
this.qno = 1;
this.currentque = 0;
var totalque = quiz.JS.length;
this.displayQuiz = function (cque) {
this.currentque = cque;
if (this.currentque < totalque) {
$("#tque").html(totalque);
$("#previous").attr("disabled", false);
$("#next").attr("disabled", false);
$("#qid").html(quiz.JS[this.currentque].id + '.');
$("#question").html(quiz.JS[this.currentque].question);
$("#question-options").html("");
for (var key in quiz.JS[this.currentque].options[0]) {
if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
$("#question-options").append(
"<div class='form-check option-block'>" +
"<label class='form-check-label'>" +
"<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
quiz.JS[this.currentque].options[0][key] +
"</span></label>"
);
}
}
}
if (this.currentque <= 0) {
$("#previous").attr("disabled", true);
}
if (this.currentque >= totalque) {
$('#next').attr('disabled', true);
for (var i = 0; i < totalque; i++) {
this.score = this.score + quiz.JS[i].score;
}
return this.showResult(this.score);
}
}
this.showResult = function (scr) {
$("#result").addClass('result');
$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
for (var j = 0; j < totalque; j++) {
var res;
if (quiz.JS[j].score == 0) {
res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
} else {
res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
}
$("#result").append(
'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
'<div class="last-row"><b>Score:</b> &nbsp;' + res +
'</div>'
);
}
}
this.checkAnswer = function (option) {
var answer = quiz.JS[this.currentque].answer;
option = option.replace(/</g, "&lt;") //for <
option = option.replace(/>/g, "&gt;") //for >
option = option.replace(/"/g, "&quot;")
if (option == quiz.JS[this.currentque].answer) {
if (quiz.JS[this.currentque].score == "") {
quiz.JS[this.currentque].score = 1;
quiz.JS[this.currentque].status = "correct";
}
} else {
quiz.JS[this.currentque].status = "wrong";
}
}
this.changeQuestion = function (cque) {
this.currentque = this.currentque + cque;
this.displayQuiz(this.currentque);
}
}
var jsq = new quizApp();
var selectedopt;
$(document).ready(function () {
jsq.displayQuiz(0);
$('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
//var radio = $(this).find('input:radio');
$(this).prop("checked", true);
selectedopt = $(this).val();
});
});
$('#next').click(function (e) {
e.preventDefault();
if (selectedopt) {
jsq.checkAnswer(selectedopt);
}
jsq.changeQuestion(1);
});
$('#previous').click(function (e) {
e.preventDefault();
if (selectedopt) {
jsq.checkAnswer(selectedopt);
}
jsq.changeQuestion(-1);
});
