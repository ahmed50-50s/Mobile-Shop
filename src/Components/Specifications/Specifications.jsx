import {
  faMobileScreen,
  faCamera,
  faBatteryFull,
  faMicrochip,
  faNewspaper,
  faBox,
  faCrown,
  faThumbsUp,
  faTriangleExclamation,
  faPalette,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Specifications({ details }) {
  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-2xl px-6 py-8 max-w-6xl mx-auto mt-8 text-gray-800">
      {/* العنوان الرئيسي */}
      <h1 className="text-4xl font-extrabold text-[#1e3a5f] text-center mb-10 border-b-4 border-[#3d7ab8] pb-3 inline-block mx-auto">
        المواصفات التفصيلية
      </h1>

      {/* نظرة عامة */}
      <Section title="نظرة عامة" icon={faCrown}>
        {details.detailedSpecsAr.map((item, index) => (
          <SpecItem key={index} text={item} />
        ))}
      </Section>

      {/* الشاشة */}
      <Section title="الشاشة" icon={faMobileScreen}>
        {details.screenDetailsAR.map((item, index) => (
          <SpecItem key={index} text={item} />
        ))}
      </Section>

      {/* الكاميرا */}
      <Section title="الكاميرا" icon={faCamera}>
        {details.cameraDetailsAR.map((item, index) => (
          <SpecItem key={index} text={item} />
        ))}
      </Section>

      {/* البطارية */}
      <Section title="البطارية" icon={faBatteryFull}>
        <SpecItem
          text={`سعة البطارية: ${details.battery.capacityMah} مللي أمبير`}
        />
        <SpecItem
          text={`الشحن السلكي: ${details.battery.wiredCharging.powerWatts} واط (${details.battery.wiredCharging.speed})`}
        />
        <SpecItem
          text={`الشحن اللاسلكي: ${details.battery.wirelessCharging.powerWatts} واط (${details.battery.wirelessCharging.speed})`}
        />
        <SpecItem
          text={`الشحن العكسي: ${details.battery.reverseCharging.powerWatts} واط (${details.battery.reverseCharging.speed})`}
        />
      </Section>

      {/* الأداء والمعالج */}
      <Section title="الأداء والمعالج" icon={faMicrochip}>
        <SpecItem text={`المعالج: ${details.processor.nameAr}`} />
        <SpecItem text={`عدد الأنوية: ${details.processor.cores}`} />
        <SpecItem text={`السرعة: ${details.processor.clockSpeed} جيجاهرتز`} />
        <SpecItem text={`المعمارية: ${details.processor.architecture}`} />
        <SpecItem
          text={`دقة التصنيع: ${details.processor.processSize} نانومتر`}
        />
        <SpecItem text={`معالج الرسوميات: ${details.processor.gpu}`} />
      </Section>

      {/* التصميم / الأداء / محتويات العلبة في صف واحد */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {/* التصميم */}
        <MiniSection title="التصميم" icon={faPalette}>
          {details.designAR.map((item, index) => (
            <MiniItem key={index} text={item} />
          ))}
        </MiniSection>

        {/* الأداء */}
        <MiniSection title="الأداء" icon={faBolt}>
          {details.performanceAR.map((item, index) => (
            <MiniItem key={index} text={item} />
          ))}
        </MiniSection>

        {/* محتويات العلبة */}
        <MiniSection title="محتويات العلبة" icon={faBox}>
          {details.boxIncludedAR.map((item, index) => (
            <MiniItem key={index} text={item} />
          ))}
        </MiniSection>
      </div>
    </div>
  );
}

function Section({ title, icon, children }) {
  return (
    <div className="mt-10 bg-gray-50 p-5 rounded-2xl border border-gray-200 shadow-sm">
      <h2 className="font-extrabold text-2xl text-[#2d5a87] mb-4 flex flex-row-reverse items-center gap-3 border-b border-[#3d7ab8] pb-2">
        <FontAwesomeIcon icon={icon} className="text-[#3d7ab8]" />
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function SpecItem({ text }) {
  return (
    <div className="flex flex-row-reverse items-start gap-3">
      <FontAwesomeIcon
        icon={faNewspaper}
        className="text-[#1e3a5f] mt-1 text-sm"
      />
      <p className="text-lg font-medium text-gray-700 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function MiniSection({ title, icon, children }) {
  return (
    <div className="bg-[#f7fafc] p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-[#2d5a87] mb-3 flex flex-row-reverse items-center gap-2 border-b border-[#3d7ab8] pb-1">
        <FontAwesomeIcon icon={icon} className="text-[#3d7ab8]" />
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function MiniItem({ text }) {
  return (
    <div className="flex flex-row-reverse items-start gap-2">
      <span className="text-[#3d7ab8] text-sm mt-1">•</span>
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}
