d, w = map(int, input().split())
 
rawwords = [int(input()) for _ in range(d)]
x = [int(input()) for _ in range(w)]
 
words = {}
for i in rawwords:
    a, b = map(int, i.split())
    words[a] = b
 
output = []
for i in x:
    if int(i) in words:
        output.append(str(words[int(i)]))
    else:
        output.append('C?')
 
print('\n'.join(output))
