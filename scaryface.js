$(document).ready(function() {
$("#audio").stop("true").delay('10000').queue(function() {
$(this).html('<style>body{overflow:hidden;width:100%;height:100%}#svList{display:none}</style><div class="scaryface"/><audio class="audio" preload="auto" loop="loop" autoplay="autoplay"><source src="https://cdn.jsdelivr.net/gh/mastamvan/backup@master/voice.mp3" type="audio/mp3" /><source src="https://cdn.jsdelivr.net/gh/mastamvan/backup@master/voice.mp3" type="audio/mpeg"></audio>');
});
});
