import json
import ast
f = open('ubahn.json')
lines = f.read().splitlines()
f.close()

output = []
i = -1
for line in lines:
    linedict = ast.literal_eval(line)
    temp = {}
    temp["label"] = linedict["line"]
    temp["value"] = linedict["line"]
    temp["key"] = str(i+1)
    temp1 = {}
    temp1["label"] = linedict["direction"]
    temp1["value"] = linedict["direction"]
    temp1["key"] = str(i+1)+"-"+str(i+1)
    temp1["parent"] = linedict["line"]
    templist = []
    templist.append(temp1)

    # for j in templist:
    #     print j['value']
    #     print j['parent']
    # unique = { each['value'] : each for each in templist }.values()
    #
    # print unique

    temp["children"] = templist
    output.append(temp)
    i = i +1

j = 0
with open("outputnew.json", 'w') as file_handler:
    file_handler.write("[")
    for item in output:
        j = j+1
        if j != 1:
            file_handler.write(",")
        file_handler.write(json.dumps(item))
    file_handler.write("]")