interface ContributionProps {
    contribution?: string;
}

const ProjectContribution = ({ contribution }: ContributionProps) => {
    return (
        <section className="space-y-8">
            <div id="contribution">
                <h2 className="section-title">My Contribution</h2>

                <div className="bg-white border border-[#E4E2DC] rounded-sm p-8 relative overflow-hidden">
                    <span className="absolute right-6 top-2 font-serif text-[100px] text-[#F4E3DC] leading-none">
                        &ldquo;
                    </span>

                    <p className="relative max-w-3xl body-text">{contribution}</p>
                </div>
            </div>
        </section>
    );
};

export default ProjectContribution;
