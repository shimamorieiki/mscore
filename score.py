import math


class Score:

    def __init__(self, hu, han):
        self.hu = hu
        self.han = han
        self.base = self.setbase()

    def setbase(self):
        base = self.hu * pow(2, self.han+2)
        if base >= 2000:
            base = 2000
        return base

    def Kirisute(self, n):
        return int(math.ceil(n/100)*100)

    def ParentRon(self):
        return self.Kirisute(self.base * 6)

    def ChildRon(self):
        return self.Kirisute(self.base * 4)

    def ParentTumo(self):
        return self.Kirisute(self.base * 2)

    def ChildTumo(self):
        return self.Kirisute(self.base * 2), self.Kirisute(self.base)


if __name__ == "__main__":
    score = Score(40, 3)
    print(score.ParentRon())
    print(score.ParentTumo())
    print(score.ChildRon())
    print(score.ChildTumo())
