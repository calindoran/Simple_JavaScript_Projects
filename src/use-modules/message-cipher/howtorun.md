# Message Cipher

Message Mixer Inc. offers a message-encryption service that transforms input text, using various ciphers, and displays the encrypted message to the console.

There are three encryption methods provided by this service:

A “Caesar Cipher” in which the characters of the input message are shifted alphabetically by a given amount.
A “Symbol Cipher” in which select characters from the input message are replaced with visually similar symbols.
A “Reverse Cipher” in which each word of the input message is reversed in place.

To use this service, run the command below:

```
node message-mixer.js ['caesar'|'symbol'|'reverse'] [amount]
```

Here are some examples of running this program:

```
$ node message-mixer.js caesar 4
Enter the message you would like to encrypt...
> hello world
 
Here is your encrypted message:
> lipps asvph
 
$ node message-mixer.js 'reverse'
Enter the message you would like to encrypt...
> hello world
 
Here is your encrypted message:
> olleh dlrow
```

For example, try running this command in the terminal using Bash:

```
node message-mixer.js caesar 4
```

And then, when prompted, type the following message:

```
> cnawp fkx!
```

Should return:

```
> great job!
```

For example, using message-mixer.js, we can encode the message 'hello world' using a Caesar cipher with an amount of 4 like so:
```
$ node message-mixer.js caesar 4
Enter the message you would like to encrypt...
> hello world
 
Here is your encrypted message:
> lipps asvph
```

To decode the message 'lipps asvph', we can run the program in reverse, like so:
```
$ node message-mixer.js caesar -4
Enter the message you would like to encrypt...
> lipps asvph
 
Here is your encrypted message:
> hello world
```
