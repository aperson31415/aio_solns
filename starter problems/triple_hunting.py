n = int(input())
numbers = [int(input()) for _ in range(n)]
 
rawk = []
for i in range(len(numbers)):
    if numbers[i] % 3 == 0:
        rawk.append(str(i+1))
 
output = ''
if rawk != []:
    output += (f'{len(rawk)}\n')
    output += (' '.join(rawk))
else:
    output = 'Nothing here!'
 
print(output)
