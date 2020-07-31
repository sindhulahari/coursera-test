var names = [ "john", "bob", "joy","edison","sam"];
for (var i = 0; i < names.length; i++) {

 	var letter= names[i].charAt(0).toLowerCase();

 	if (letter === "j") {

 		saygoodbye();
 	}

 	else {
 		sayhello();
 	}
 }
