# There's probably a more efficient way
N = int(input())
word = input().strip()
 
toChange = {}
 
for i in range(N//2):
    if not (word[i] == word[len(word)-i-1]):
        toChange[i] = list(word[i]+word[len(word)-i-1])
 
for i in toChange:
    correct_letter = min(toChange[i])
    raw_index = toChange[i].index(correct_letter)
    if raw_index == 0:
        correct_index = i
    else:
        correct_index = len(word)-i - 1
    changed_index = N - correct_index - 1
    word[changed_index] = correct_letter

print(''.join(word))
