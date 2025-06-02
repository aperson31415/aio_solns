#NOT SUMBITTED

inputFile = open("mixin.txt", "r")
n, d = map(inputFile.readline().split())
b = n%d
a = (n-b)/d
outputFile = open("mixout.txt", "w")
outputFile.write(f'{a} {b}/{d}')
outputFile.close()
inputFile.close()
