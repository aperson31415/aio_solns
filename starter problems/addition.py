inputFile = open("addin.txt", "r").read()

a, b = inputFile.split()
a = int(a)
b = int(b)

total = a+b

outputFile = open("addout.txt", "w")
outputFile.write(str(total))

inputFile.close()
outputFile.close()
