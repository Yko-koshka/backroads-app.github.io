const SocialLink = ({ link, icon, itemClass }) => {
  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  )
}
export default SocialLink
