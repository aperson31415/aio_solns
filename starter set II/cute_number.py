rawinput = input()
d = int(rawinput[0])
N = [int(input()) for _ in range(d)]
 
count = 0
for i in range(d):
    if N[len(N)-i-1] == 0:
        count += 1
    else:
        break;
 
print(count)
