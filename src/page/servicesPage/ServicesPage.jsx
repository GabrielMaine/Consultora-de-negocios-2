import { dataServices } from "../../data/dataServices";
import SubTitleSection from "../../components/subtitleSection/SubTitleSection";
import TitleSection from "../../components/titleSection/TitleSection";
import NavigateToTop from "../../routing/NavigateToTop";
import GoBackButton from "../../components/buttons/goBackButton/GoBackButton";
import styles from "./ServicesPage.module.css";
import ServicesCard from "../../components/servicesCard/ServicesCard";
import Footer from "../../components/footer/Footer";

export default function ServicesPage() {
	return (<>
	<section
		className={styles.section}
		id="servicios">
		<NavigateToTop />
		<GoBackButton />
		<div className={styles.container}>
			<SubTitleSection content="Soluciones a tu alcance" />
			<TitleSection content="Nuestros servicios" />
			<div className={styles.row}>
				{dataServices.map((service) => (
					<div key={service.url}>
						<ServicesCard content={ service } />
					</div>
				))}
			</div>
		</div>
	</section>
	<Footer />
	</>
	);
}
