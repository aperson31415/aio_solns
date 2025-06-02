N, K = list(map(int, input().split()))
S = [int(input()) for _ in range(N)]
 
frequencies = {n:{} for n in range(3)}
need_to_change = 0
 
for i in range(len(S)):
    if S[i] in frequencies[i%3]:
        frequencies[i%3][S[i]] += 1
    else:
        frequencies[i%3][S[i]] = 1
 
for i in range(3):
    most_occurences = max(frequencies[i].values())
    total_values = sum(frequencies[i].values())
    need_to_change += total_values - most_occurences
 
print(need_to_change)
