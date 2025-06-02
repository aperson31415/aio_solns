N = int(input())
D = map(int, input().split())
 
leader = 0
leaders = 0
for i in D:
    if i > leader:
        leader = i
        leaders += 1
 
print(leaders)
