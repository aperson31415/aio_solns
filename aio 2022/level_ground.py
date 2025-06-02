N = int(input())
A = list(map(int, input().split()))
A.append('-1')
 
current_max = 0
current = 0
times = 0
for i in A:
    if i == current: times += 1
    else:
        if current * times > current_max: current_max = current * times
        current = i
        times = 1
 
print(current_max)
