N = int(input())
word = input()
 
output = 0
current_letter = ''
score = 0
 
for i in range(len(word)):
    #print(current_letter, word[i], score, output)
    if word[i] == current_letter or word[i] == '?':
        score += 1
    else:
        output += score
        score = 0
        current_letter = word[i]
output += score
 
print(output)
