import styles from "../theme/socialProof.module.css";

const users = [
    { name: "Praashoo7", posts: 48, followers: "367,940" },
    { name: "Nawsome", posts: 40, followers: "316,490" },
    { name: "mrhydden", posts: 49, followers: "234,520" },
    { name: "chase2k25", posts: 143, followers: "284,660" },
    { name: "alexruix", posts: 40, followers: "272,090" },
    { name: "andrew-demchenk0", posts: 119, followers: "362,290" },
    { name: "devcraft_io", posts: 87, followers: "198,340" },
    { name: "code_ninja42", posts: 63, followers: "412,100" },
];

function UserCard({
    name,
    posts,
    followers,
}: {
    name: string;
    posts: number;
    followers: string;
}) {
    const initials = name.slice(0, 2).toUpperCase();

    return (
        <div className={styles.userCard}>
            <div className={styles.avatar}>
                <span className={styles.avatarIcon}>{initials}</span>
            </div>
            <div className={styles.userInfo}>
                <span className={styles.userName}>{name}</span>
                <span className={styles.userStats}>
                    {posts} posts<span className={styles.statDot}>•</span>★ {followers}
                </span>
            </div>
        </div>
    );
}

export default function SocialProof() {
    // Duplicate array for seamless infinite scrolling
    const doubledUsers = [...users, ...users];

    return (
        <section className={styles.socialProof}>
            <div className={styles.marqueeRow}>
                {doubledUsers.map((user, i) => (
                    <UserCard key={`row1-${i}`} {...user} />
                ))}
            </div>
            <div className={styles.marqueeRowReverse}>
                {doubledUsers.map((user, i) => (
                    <UserCard key={`row2-${i}`} {...user} />
                ))}
            </div>
        </section>
    );
}
