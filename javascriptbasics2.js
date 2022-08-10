<p>Click the button to sort an array.</p>
<button onclick="myFunction()">Click</button>
<p id="myId"></p>

<script>
    var a = ["apples", "bananas", "cherry", "berry"];
    document.getElementById("myId").innerHTML = a;

    function myFunction() {
       a.sort();
        document.getElementById("myId").innerHTML = a;
    }
</script>
