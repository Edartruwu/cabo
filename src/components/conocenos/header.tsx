"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function HeaderComponent() {
  return (
    <main className="text-white font-bold h-[62.3vh] flex items-center justify-center bg-top bg-conconos bg-cover bg-no-repeat">
      <div className="text-white lg:mt-16">
        <h3 className="text-[36px] font-bold mb-[15px]">Nosotros</h3>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-white" href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white stroke-white" />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-white" href="/conocenos">
                Conocenos
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </main>
  );
}
