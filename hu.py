import math


class Fu:
    # (1) 基本符：副底（フーテイ）20符
    # (2) アガり方：メンゼンロン（鳴きなしロン）10符／ツモ2符
    # (3) 面子（メンツ）の種類：順子（シュンツ）／刻子（コーツ）／槓子（カンツ）で0符～32符
    # (4) 雀頭（ジャントウ＝アタマ）の種類：役牌2符／役牌以外は0符
    # (5) 待ち形の種類：ペンチャン／カンチャン／リャンメンなどで0符～2符

    def __init__(self):
        self.futei = 20
        self.agari = 0
        self.mentu = 0
        self.janto = 0
        self.mati = 0
        self.total = 0

    def setFutei(self, futei):
        self.futei = futei

    def getFutei(self):
        return self.futei

    def setAgari(self, agari):
        self.agari = agari

    def getAgari(self):
        return self.agari

    def setMentu(self, mentu):
        self.mentu = mentu

    def getMentu(self):
        return self.mentu

    def addMentu(self, mentu):
        self.mentu += mentu

    def setJanto(self, janto):
        self.janto = janto

    def getJanto(self):
        return self.janto

    def setMati(self, mati):
        self.mati = mati

    def getMati(self):
        return self.mati

    def culcTotal(self):
        total = self.futei + self.agari + self.mentu + self.janto + self.mati
        self.setTotal(total)

    def setTotal(self, total):
        self.total = total

    def getTotal(self):
        return self.total

    def Tumo(self):
        self.setAgari(2)

    def Menzenron(self):
        self.setAgari(10)

    def Ron(self):
        self.setAgari(0)

    def Shuntu(self):
        self.addMentu(0)

    def MinkoChun(self):
        self.addMentu(2)

    def AnkoChun(self):
        self.addMentu(4)

    def MinkanChun(self):
        self.addMentu(4)

    def AnkanChun(self):
        self.addMentu(16)

    def MinkoYao(self):
        self.addMentu(4)

    def AnkoYao(self):
        self.addMentu(8)

    def MinkanYao(self):
        self.addMentu(16)

    def AnkanYao(self):
        self.addMentu(32)

    def JantoShu(self):
        self.addMentu(0)

    def JantoOta(self):
        self.addMentu(0)

    def JantoJihu(self):
        self.addMentu(2)

    def JantoBahu(self):
        self.addMentu(2)

    def JantoSan(self):
        self.addMentu(2)

    def JantoDabu(self):
        self.addMentu(2)

    def Ryanmen(self):
        self.setMati(0)

    def Shanpon(self):
        self.setMati(2)

    def Penchan(self):
        self.setMati(2)

    def Kanchan(self):
        self.setMati(2)

    def Tanki(self):
        self.setMati(2)

    def Nobetan(self):
        self.setMati(2)

    def Titoi(self):
        self.setTotal(25)

    def Tumopinfu(self):
        self.setTotal(20)

    def Kiriage(self):
        total = self.getTotal()
        total = int(math.ceil(total/10)*10)
        self.setTotal(total)


if __name__ == "__main__":
    fu = Fu()

    fu.Menzenron()

    fu.Shuntu()
    fu.Shuntu()
    fu.Shuntu()
    fu.MinkoChun()

    fu.JantoBahu()

    fu.Ryanmen()

    fu.culcTotal()
    fu.Kiriage()

    print(fu.getTotal())
