n, c = map(int, input())
numbers = [int(input()) for _ in range(n)]
 
total = 0
 
for i in range(len(numbers)):
    total += numbers[i]
    if total >= c:
        output = i+1
        break
 
print(output)
# Might not be cmompletely right, converted from old file input/output, not tested
