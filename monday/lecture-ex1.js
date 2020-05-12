const countDown = function (arg, func) {
	setTimeout(() => {
			func();
	}, arg);
}

countDown(0, () => {
   console.log("3...")
   countDown(1000, () => {
       console.log("2...")
       countDown(1000, () => {
           console.log("1...");
           countDown(1000, () => {
               console.log("Go...")
           });
       });
   });
});

