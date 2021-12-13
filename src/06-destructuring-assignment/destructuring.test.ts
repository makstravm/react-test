import { ManTypeProps } from "./Destructuring";


let props: ManTypeProps;
beforeEach(() => {
    props = {
        name: 'Maksim',
        age: 27,
        lessons: [{ title: '1' }, { title: '2' }],
        address: {
            street: {
                title: 'Banniy street'
            }
        }
    }
})

test('Ok ', () => {

    const a = props.age;
    const l = props.lessons;

    const { age, lessons } = props;
    const { title } = props.address.street

    expect(age).toBe(27);
    expect(lessons.length).toBe(2);

    expect(a).toBe(27);
    expect(title).toBe('Banniy street');
    expect(l.length).toBe(2);
});

test('Ok1 ', () => {

    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1, ls2] = props.lessons;

    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2');
    expect(ls1.title).toBe('1');
    expect(ls2.title).toBe('2');
})