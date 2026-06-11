function diagnose(){

const issue=

document
.getElementById(
"issue"
)

.value

const result=

document
.getElementById(
"result"
)

if(issue==="internet"){

result.innerHTML=`

<h2>

🛜 No Internet

</h2>

<p>

1. Restart adapter

</p>

<p>

2. Reconnect network

</p>

<p>

3. Run troubleshooter

</p>

<p>

4. Restart router

</p>

`

}

else if(issue==="printer"){

result.innerHTML=`

<h2>

🖨 Printer Offline

</h2>

<p>

1. Restart printer

</p>

<p>

2. Set default printer

</p>

<p>

3. Restart spooler

</p>

`

}

else if(issue==="slow"){

result.innerHTML=`

<h2>

💻 PC Running Slow

</h2>

<p>

1. Disable startup apps

</p>

<p>

2. Disk Cleanup

</p>

<p>

3. Restart device

</p>

`

}

else if(issue==="login"){

result.innerHTML=`

<h2>

🔐 Cannot Login

</h2>

<p>

1. Verify account

</p>

<p>

2. Reset password

</p>

<p>

3. Test login

</p>

`

}

else{

result.innerHTML=

"Choose issue first"

}

}

function resetResult(){

document
.getElementById(
"issue"
)

.value=""

document
.getElementById(
"result"
)

.innerHTML=

"Choose an issue above"

}

function toggleDark(){

document.body
.classList
.toggle(
"dark"
)

}