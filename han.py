class Han:

    def __init__(self):
        self.han = 0

    def setHan(self, han):
        if han == "Limit":
            if self.han == "Limit":
                self.han = "DoubleLimit"
            elif self.han == "DoubleLimit":
                self.han = "TripleLimit"
            elif self.han == "TripleLimit":
                self.han = "ForthLimit"
            elif self.han == "ForthLimit":
                self.han = "FifthLimit"
            else:
                self.han = "Limit"
        if han == "DoubleLimit":
            if self.han == "Limit":
                self.han = "TripleLimit"
            elif self.han == "DoubleLimit":
                self.han = "ForthLimit"
            elif self.han == "TripleLimit":
                self.han = "FifthLimit"
            else:
                self.han = "DoubleLimit"
        else:
            if type(self.han) != str:
                self.han += han

    def getHan(self):
        if type(self.han) == int and self.han >= 13:
            self.han = "Limit"
        return self.han

    def ReadyHand(self):
        self.setHan(1)

    def SevenPairs(self):
        self.setHan(1)

    def NagashiMangan(self):
        self.setHan("NagashiMangan")

    def SelfPick(self):
        self.setHan(1)

    def OneShot(self):
        self.setHan(1)

    def LastTileFromTheWall(self):
        self.setHan(1)

    def LastDiscard(self):
        self.setHan()

    def DeadWallDraw(self):
        self.setHan(1)

    def RobbingAQuad(self):
        self.setHan(1)

    def DoubleReady(self):
        self.setHan(2)

    def NoPointsHand(self):
        self.setHan(1)

    def OneSetOfIdenticalSequences(self):
        self.setHan(1)

    def ThreeColourStraightClosed(self):
        self.setHan(2)

    def ThreeColourStraightOpen(self):
        self.setHan(1)

    def StraightClosed(self):
        self.setHan(2)

    def StraightOpen(self):
        self.setHan(1)

    def TwoSetsOfIdenticalSequences(self):
        self.setHan(3)

    def AllTripletHand(self):
        self.setHan(2)

    def ThreeClosedTriplets(self):
        self.setHan(2)

    def ThreeColourTriplets(self):
        self.setHan(2)

    def ThreeKans(self):
        self.setHan(2)

    def AllSimples(self):
        self.setHan(1)

    def HonorTilesHaku(self):
        self.setHan(1)

    def HonorTilesHatu(self):
        self.setHan(1)

    def HonorTilesChun(self):
        self.setHan(1)

    def TerminalOrHonorInEachSetClosed(self):
        self.setHan(2)

    def TerminalOrHonorInEachSetOpen(self):
        self.setHan(1)

    def TerminalInEachSetClosed(self):
        self.setHan(3)

    def TerminalInEachSetOpen(self):
        self.setHan(2)

    def AllTerminalsAndHonors(self):
        self.setHan(2)

    def LittleThreeDragons(self):
        self.setHan(2)

    def HalfFlushClosed(self):
        self.setHan(3)

    def HalfFlushOpen(self):
        self.setHan(2)

    def FlushClosed(self):
        self.setHan(6)

    def FlushOpen(self):
        self.setHan(5)

    def ThirteenOrphans(self):
        self.setHan("Limit")

    def ThirteenOrphans13Wait(self):
        self.setHan("DoubleLimit")

    def FourConcealedTriplets(self):
        self.setHan("Limit")

    def FourConcealedTripletsSingleWait(self):
        self.setHan("DoubleLimit")

    def BigThreeDragons(self):
        self.setHan("Limit")

    def LittleFourWinds(self):
        self.setHan("Limit")

    def BigFourWinds(self):
        self.setHan("DoubleLimit")

    def AllHonors(self):
        self.setHan("Limit")

    def AllTerminals(self):
        self.setHan("Limit")

    def AllGreen(self):
        self.setHan("Limit")

    def NineGates(self):
        self.setHan("Limit")

    def NineGates9Wait(self):
        self.setHan("DoubleLimit")

    def FourKans(self):
        self.setHan("Limit")

    def HeavenlyHand(self):
        self.setHan("Limit")

    def HandOfEarth(self):
        self.setHan("Limit")

    def HandOfMan(self):
        self.setHan("Limit")

    def Dora(self, n):
        self.setHan(n)

    def DoraRed(self, n):
        self.setHan(n)

    def DoraUra(self, n):
        self.setHan(n)


if __name__ == "__main__":
    han = Han()
    han.ThreeClosedTriplets()
    han.ReadyHand()
    han.Dora(20)
    han.ThirteenOrphans()
    # han.NineGates9Wait()
    print(han.getHan())
