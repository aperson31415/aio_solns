file = open("cutein.txt", "r")
N = file.readlines()
N = N[::-1]

#N = ['1', '2', '3', '0', '4']
#N = N[::-1]

output = 0
for i in N:
    if i == '0' or i == 0:
        output += 1
    else:
        break

print(output)

file2 = open("cuteout.txt", "w")
file2.write(str(output))

file.close()
file2.close()
