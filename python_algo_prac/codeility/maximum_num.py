## Largest possible number by deleting given digit

N = 15656
def solution(N):

    string = str(N)
    inputArray = list(string)

    print(inputArray)
    # if type(N) != int:
    #     N = int(N)
    # # all_possible snumbers
    # possibles = []
    # # indexes of 5
    # fives = []
    # N = str(N)
    # if "5" not in N:
    #     print("There must be atleast one 5")
    #     return int(N)
    # elif len(N) < 2:
    #     print("Must be atleast 2 digit Number")
    #     return int(N)
    # for i in range(0, len(N)):
    #     if str(N)[i] == "5":
    #         fives.append(i)
    # print("5 found on indices = ", fives)
    # for k in fives:
    #     chars = list(N)
    #
    #     chars[k] = ''
    #     print("Replace {} 5 in {} and get {}".format(k, N, int("".join(chars))))
    #     possibles.append(int("".join(chars)))
    # print("all combos = ", possibles)
    # return max(possibles)



solution(N)