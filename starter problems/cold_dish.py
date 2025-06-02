n = int(input())
numbers = [int(input()) for _ in range(n)]
 
maximum = 0
minimum = 1000001
total = 0
 
for i in range(len(numbers)-1):
    I = numbers[i+1]
    total += I
    if I > maximum:
        maximum = I
    if I < minimum:
        minimum = I
 
rawmean = (total/numbers[0])
mean = rawmean-(rawmean%1) # Rounded
 
print(f'{minimum} {maximum} {int(mean)}')
