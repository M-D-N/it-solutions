export default function Tech() {
    const techsTop = [
        {
            name: 'Used technologies',
            description: 'Fill the gaps in your competencies by setting up a remote IT team. We will find the best experts for you and arrange everything around it. You will get a perfect match both in skills and cultural fit.'
        }
    ];
    const techs = [
        {
            name: 'Title of the first technology',
            icon: 'js.svg'
        },
        {
            name: 'Second technology description',
            icon: 'js.svg'
        },
        {
            name: 'Third technology descriptiony',
            icon: 'js.svg'
        },
        {
            name: 'Forth technology description',
            icon: 'js.svg'
        },
        {
            name: 'Fifth technology description',
            icon: 'js.svg'
        },
        {
            name: 'Sixth technology description',
            icon: 'js.svg'
        },
        {
            name: 'Seventh technology description',
            icon: 'js.svg'
        },
        {
            name: 'Eighth technology description',
            icon: 'js.svg'
        }
    ];
    return(
        <section className="container">

            <h3>{techsTop[0].name}</h3>
            <p>{techsTop[0].description}</p>

        </section>
    );
}