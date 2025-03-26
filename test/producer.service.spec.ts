describe('ProducersController', () => {

    describe('champions', () => {
        it("Get to /producer/champions should return 200", async () => {
            const res = await fetch(`http://localhost:3000/producer/champions`)

            expect(res.status).toBe(200);
            const body = await res.json()

            expect(body).not.toBeNull();
            expect(body.min.length).toEqual(1);
            expect(body.max.length).toEqual(1);

            expect(body.min[0].producer).toEqual("Wyck Godfrey, Stephenie Meyer and Karen Rosenfelt");
            expect(body.min[0].interval).toEqual(1);
            expect(body.min[0].previousWin).toEqual(2011);
            expect(body.min[0].followingWin).toEqual(2012);


            expect(body.max[0].producer).toEqual("Jerry Weintraub");
            expect(body.max[0].interval).toEqual(18);
            expect(body.max[0].previousWin).toEqual(1980);
            expect(body.max[0].followingWin).toEqual(1998);

        })
    })

    describe('producer', () => {
        test("Get to /producer should return 200", async () => {
            const res = await fetch(`http://localhost:3000/producer`)

            expect(res.status).toBe(200);
            const body = await res.json()

            expect(body).not.toBeNull();
            expect(body.length).toEqual(206);
            expect(body[0].year).toBeDefined();
            expect(body[0].title).toBeDefined();
            expect(body[0].studios).toBeDefined();
            expect(body[0].producers).toBeDefined();
            expect(body[0].winner).toBeDefined();
        })
    });
});

