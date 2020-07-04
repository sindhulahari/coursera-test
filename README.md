<!DOCTYPE html>
<html>
<head>
	<title>assignment</title>
</head>
<style type="text/css">
h1 {
	text-align: center;
	margin-bottom: 50px
}	

.p1 {
	float: left;
	background-color: #00ffff;
	width: 100%;
	height: 175px;
	border: 1px solid black;
	margin-right: 10px;
	padding: 2px;
	overflow: scroll;

}
.p2 {
	float: left;
	background-color: #ffbf00;
	width: 100%;
	height: 175px;
	border: 1px solid black;
	padding: 2px;
	overflow: scroll;

	

}
.p3 {
	float: right;
	background-color: #00bfff;
	width: 100%;
	height: 175px;
	border: 1px solid black;
	padding: 2px;
	overflow: scroll;

}

#p4{
	width: 100px;
	height: 20px;
	background-color: red;
	border: 1.5px black;
	position: relative;
	top:  10px;
	float: right;
	padding: 10px;

}
#p5 {
	width: 100px;
	height: 20px;
	background-color: red;
	border: 1.5px black;
	position: relative;
	top:  10px;
	float: right;
	padding: 10px;
}
#p6 {
	width: 100px;
	height: 20px;
	background-color: red;
	border: 1.5px black;
	position: relative;
	top:  10px;
	float: right;
	padding: 10px;
}

.sub {
	position: relative;
	top: 50px;
}

@media (min-width: 992px){
	.p1{
		width: 31%;
	}
	.p2{
		width: 32%;
	}
	.p3{
		width: 33%;
	}
}

@media (max-width: 991px) and (min-width: 768px){
	.p1{
		width: 48%;
	}
	.p2{
		width: 48%;
	}
	.p3{
		width: 100%;
	}
}


</style>


<body>
	<h1>Our Menu</h1>
<div class="p1">
	<p id="p4">chicken  
     <div class="sub">Food is the basic human need to stay alive. Moreover, it is the need of every living organism. Therefore it is important that we should not waste food. Our world consists of different types of cultures.These cultures have varieties of dishes of food in them. </div>
    </p>
</div>
<div class="p2">
	<p id="p5">beef 
     <div class="sub">Food is the basic human need to stay alive. Moreover, it is the need of every living organism. Therefore it is important that we should not waste food. Our world consists of different types of cultures.These cultures have varieties of dishes of food in them.</div>
    </p>
</div>
<div class="p3">
	<p id="p6">sushi  
     <div class="sub">Food is the basic human need to stay alive. Moreover, it is the need of every living organism. Therefore it is important that we should not waste food. Our world consists of different types of cultures.These cultures have varieties of dishes of food in them.</div>
    </p>

</div>
</body>
</html>
